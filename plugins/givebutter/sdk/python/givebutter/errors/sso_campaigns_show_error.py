from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.authentication_exception1 import AuthenticationException1

SsoCampaignsShowErrorBody: TypeAlias = AuthenticationException1 | RawError


@dataclass(frozen=True, slots=True)
class _SsoCampaignsShowError:
    def map(self, status_code: int, content: bytes) -> SsoCampaignsShowErrorBody:
        match status_code:
            case 401:
                return decode_json[AuthenticationException1](content)
            case _:
                return RawError(status_code, content)


sso_campaigns_show_error_mapper: Final[ErrorMapper[SsoCampaignsShowErrorBody]] = _SsoCampaignsShowError()
