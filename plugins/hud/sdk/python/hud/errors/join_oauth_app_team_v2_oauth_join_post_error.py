from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

JoinOauthAppTeamV2OauthJoinPostErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _JoinOauthAppTeamV2OauthJoinPostError:
    def map(self, status_code: int, content: bytes) -> JoinOauthAppTeamV2OauthJoinPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 502 | 503:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


join_oauth_app_team_v2_oauth_join_post_error_mapper: Final[
    ErrorMapper[JoinOauthAppTeamV2OauthJoinPostErrorBody]
] = _JoinOauthAppTeamV2OauthJoinPostError()
