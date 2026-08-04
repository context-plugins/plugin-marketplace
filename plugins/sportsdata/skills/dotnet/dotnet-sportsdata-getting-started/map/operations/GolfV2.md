# GolfV2 — operations

Accessor: `client.GolfV2` · Source: `Api/GolfV2.cs` · 23 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GolfV2CoursesCourses
- **HTTP**: `GET /golf/v2/{format}/Courses` (Default (api))
- **Notes**: Courses
- **Signature**: `GolfV2CoursesCourses(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Courses>`
- **Error**: `SdkException<GolfV2CoursesCoursesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2CurrentseasonSeasonCurrent
- **HTTP**: `GET /golf/v2/{format}/CurrentSeason` (Default (api))
- **Notes**: Season Current
- **Signature**: `GolfV2CurrentseasonSeasonCurrent(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Season3`
- **Error**: `SdkException<GolfV2CurrentseasonSeasonCurrentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlate
- **HTTP**: `GET /golf/v2/{format}/DfsSlateOwnershipProjectionsBySlateID/{slateId}` (Default (api))
- **Notes**: Slate Ownership Projections for a specific slate. Projections are for Guaranteed Prize Pool (GPP) format ownership. Will return an empty list if the slate is not yet projected or not a slate we have projections for.
- **Signature**: `GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlate(Format format, int slateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DfsSlateWithOwnershipProjection`
- **Error**: `SdkException<GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2DfsslatesbytournamentDfsSlatesByTournament
- **HTTP**: `GET /golf/v2/{format}/DfsSlatesByTournament/{tournamentid}` (Default (api))
- **Notes**: DFS Slates - by Tournament
- **Signature**: `GolfV2DfsslatesbytournamentDfsSlatesByTournament(Format format, string tournamentid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DfsSlate>`
- **Error**: `SdkException<GolfV2DfsslatesbytournamentDfsSlatesByTournamentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2FantasygamestatsbytournamentFantasyPointsByTournament
- **HTTP**: `GET /golf/v2/{format}/FantasyGameStatsByTournament/{tournamentid}` (Default (api))
- **Notes**: Fantasy Points - by Tournament
- **Signature**: `GolfV2FantasygamestatsbytournamentFantasyPointsByTournament(Format format, string tournamentid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FantasyTournament`
- **Error**: `SdkException<GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2LeaderboardLeaderboardLiveFinal
- **HTTP**: `GET /golf/v2/{format}/Leaderboard/{tournamentid}` (Default (api))
- **Notes**: Leaderboard [Live &amp; Final]
- **Signature**: `GolfV2LeaderboardLeaderboardLiveFinal(Format format, string tournamentid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Leaderboard`
- **Error**: `SdkException<GolfV2LeaderboardLeaderboardLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2LeaderboardbasicLeaderboardBasic
- **HTTP**: `GET /golf/v2/{format}/LeaderboardBasic/{tournamentid}` (Default (api))
- **Notes**: Leaderboard (Basic)
- **Signature**: `GolfV2LeaderboardbasicLeaderboardBasic(Format format, string tournamentid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LeaderboardBasic`
- **Error**: `SdkException<GolfV2LeaderboardbasicLeaderboardBasicError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2LeaderboardbasicfinalLeaderboardBasicFinal
- **HTTP**: `GET /golf/v2/{format}/LeaderboardBasicFinal/{tournamentid}` (Default (api))
- **Notes**: Leaderboard (Basic) [Final]
- **Signature**: `GolfV2LeaderboardbasicfinalLeaderboardBasicFinal(Format format, string tournamentid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LeaderboardBasic`
- **Error**: `SdkException<GolfV2LeaderboardbasicfinalLeaderboardBasicFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2LeaderboardfinalLeaderboardFinal
- **HTTP**: `GET /golf/v2/{format}/LeaderboardFinal/{tournamentid}` (Default (api))
- **Notes**: Leaderboard [Final]
- **Signature**: `GolfV2LeaderboardfinalLeaderboardFinal(Format format, string tournamentid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Leaderboard`
- **Error**: `SdkException<GolfV2LeaderboardfinalLeaderboardFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2NewsNews
- **HTTP**: `GET /golf/v2/{format}/News` (Default (api))
- **Notes**: Basic RotoBaller news feed, with limited stories available - usually 0-1 stories per day. Ideal for test purposes.
- **Signature**: `GolfV2NewsNews(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News>`
- **Error**: `SdkException<GolfV2NewsNewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2NewsbydateNewsByDate
- **HTTP**: `GET /golf/v2/{format}/NewsByDate/{date}` (Default (api))
- **Notes**: Basic RotoBaller news feed, with limited stories available - usually 0-1 stories per day. Ideal for test purposes.
- **Signature**: `GolfV2NewsbydateNewsByDate(Format format, string date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<News>`
- **Error**: `SdkException<GolfV2NewsbydateNewsByDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2PlayerPlayer
- **HTTP**: `GET /golf/v2/{format}/Player/{playerid}` (Default (api))
- **Notes**: Player
- **Signature**: `GolfV2PlayerPlayer(Format format, string playerid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Player2`
- **Error**: `SdkException<GolfV2PlayerPlayerError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2PlayersPlayerProfilesAll
- **HTTP**: `GET /golf/v2/{format}/Players` (Default (api))
- **Notes**: Player Profiles - All
- **Signature**: `GolfV2PlayersPlayerProfilesAll(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Player2>`
- **Error**: `SdkException<GolfV2PlayersPlayerProfilesAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2PlayerseasonstatsPlayerSeasonStats
- **HTTP**: `GET /golf/v2/{format}/PlayerSeasonStats/{season}` (Default (api))
- **Notes**: Player Season Stats
- **Signature**: `GolfV2PlayerseasonstatsPlayerSeasonStats(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason2>`
- **Error**: `SdkException<GolfV2PlayerseasonstatsPlayerSeasonStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinal
- **HTTP**: `GET /golf/v2/{format}/PlayerTournamentHoleScores/{tournamentid}` (Default (api))
- **Notes**: Player Hole Scores - by Tournament [Live &amp; Final]
- **Signature**: `GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinal(Format format, string tournamentid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerTournamentBasic>`
- **Error**: `SdkException<GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinal
- **HTTP**: `GET /golf/v2/{format}/PlayerTournamentHoleScoresFinal/{tournamentid}` (Default (api))
- **Notes**: Player Hole Scores - by Tournament [Final]
- **Signature**: `GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinal(Format format, string tournamentid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerTournamentBasic>`
- **Error**: `SdkException<GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournament
- **HTTP**: `GET /golf/v2/{format}/PlayerTournamentProjectionStats/{tournamentid}` (Default (api))
- **Notes**: Player Projected Stats - by Tournament
- **Signature**: `GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournament(Format format, string tournamentid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerTournamentProjection>`
- **Error**: `SdkException<GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinal
- **HTTP**: `GET /golf/v2/{format}/PlayerTournamentRoundScores/{tournamentid}` (Default (api))
- **Notes**: Scores - by Tournament [Live &amp; Final]
- **Signature**: `GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinal(Format format, string tournamentid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TournamentRound>`
- **Error**: `SdkException<GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinal
- **HTTP**: `GET /golf/v2/{format}/PlayerTournamentRoundScoresFinal/{tournamentid}` (Default (api))
- **Notes**: Scores - by Tournament [Final]
- **Signature**: `GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinal(Format format, string tournamentid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TournamentRound>`
- **Error**: `SdkException<GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2RankingsRankings
- **HTTP**: `GET /golf/v2/{format}/Rankings/{season}` (Default (api))
- **Notes**: Rankings
- **Signature**: `GolfV2RankingsRankings(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PlayerSeason2>`
- **Error**: `SdkException<GolfV2RankingsRankingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2TournamentsScheduleBySeason
- **HTTP**: `GET /golf/v2/{format}/Tournaments/{season}` (Default (api))
- **Notes**: Schedule - by Season
- **Signature**: `GolfV2TournamentsScheduleBySeason(Format format, string season, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Tournament1>`
- **Error**: `SdkException<GolfV2TournamentsScheduleBySeasonError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2TournamentsSchedules
- **HTTP**: `GET /golf/v2/{format}/Tournaments` (Default (api))
- **Notes**: Schedules
- **Signature**: `GolfV2TournamentsSchedules(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Tournament1>`
- **Error**: `SdkException<GolfV2TournamentsSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcoming
- **HTTP**: `GET /golf/v2/{format}/UpcomingDfsSlateOwnershipProjections` (Default (api))
- **Notes**: Returns DFS Slates which have not yet started for which we have DFS Ownership projections.
- **Signature**: `GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcoming(Format format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DfsSlateWithOwnershipProjection>`
- **Error**: `SdkException<GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcomingError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
