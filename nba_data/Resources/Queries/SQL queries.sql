SELECT public."All_games"."GAME_DATE_EST",
	public."All_games"."HOME_TEAM_ID",
	public."All_games"."VISITOR_TEAM_ID",
	public."All_games"."PTS_home",
	public."All_games"."FG_PCT_home",
	public."All_games"."FT_PCT_home",
	public."All_games"."FG3_PCT_home",
	public."All_games"."AST_home",
	public."All_games"."REB_home",
	public."All_games"."PTS_away",
	public."All_games"."FG_PCT_away",
	public."All_games"."FT_PCT_away",
	public."All_games"."FG3_PCT_away",
	public."All_games"."AST_away",
	public."All_games"."REB_away",
	public."All_games"."HOME_TEAM_WINS",
	public."home_team_names"."HOME_TEAM_NAME",
	public."visitor_team_names"."VISITOR_TEAM_NAME"
INTO public."games_with_names"
FROM public."All_games"
INNER JOIN "home_team_names"
	ON public."All_games"."HOME_TEAM_ID" = public."home_team_names"."HOME_TEAM_ID"
INNER JOIN public."visitor_team_names"
	ON public."All_games"."VISITOR_TEAM_ID" = public."visitor_team_names"."VISITOR_TEAM_ID";
	
SELECT * FROM public."games_with_names";




SELECT public."player_attributes"."PLAYER_NAME",
	public."player_attributes"."BIRTHDATE",
	public."player_attributes"."AGE",
	public."player_attributes"."SCHOOL",
	public."player_attributes"."COUNTRY",
	public."player_attributes"."HEIGHT",
	public."player_attributes"."WEIGHT",
	public."player_attributes"."SEASON_EXP",
	public."player_attributes"."FIRST_SEASON",
	public."player_attributes"."LAST_SEASON",
	public."player_attributes"."DRAFT_YEAR",
	public."player_attributes"."DRAFT_ROUND",
	public."player_attributes"."DRAFT_NUMBER",
	public."player_by_season"."TEAM_ID",
	public."player_by_season"."TEAM_ABBREVIATION",
	public."player_by_season"."TEAM_CITY",
	public."player_by_season"."PLAYER_ID",
	public."player_by_season"."2pointer_MADE",
	public."player_by_season"."2pointer_ATTEMPTS",
	public."player_by_season"."3pointer_MADE",
	public."player_by_season"."3pointer_ATTEMPTS",
	public."player_by_season"."FreeThrow_MADE",
	public."player_by_season"."FreeThrow_ATTEMPTS",
	public."player_by_season"."OFFENSIVE_REBOUNDS",
	public."player_by_season"."DEFENSIVE_REBOUNDS",
	public."player_by_season"."REBOUNDS_TOTAL",
	public."player_by_season"."ASSISTS",
	public."player_by_season"."STEALS",
	public."player_by_season"."BLOCKS",
	public."player_by_season"."TURNOVERS",
	public."player_by_season"."PERSONAL_FOULS",
	public."player_by_season"."POINTS",
	public."player_by_season"."SEASON"
INTO public."regular_season_attributes"
FROM public."player_by_season"
INNER JOIN public."player_attributes"
ON public."player_by_season"."PLAYER_NAME" = public."player_attributes"."PLAYER_NAME";

SELECT * FROM public."regular_season_attributes";