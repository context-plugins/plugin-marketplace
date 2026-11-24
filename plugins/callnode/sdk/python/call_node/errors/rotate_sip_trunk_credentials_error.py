from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

RotateSipTrunkCredentialsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _RotateSipTrunkCredentialsError:
    def map(self, status_code: int, content: bytes) -> RotateSipTrunkCredentialsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


rotate_sip_trunk_credentials_error_mapper: Final[
    ErrorMapper[RotateSipTrunkCredentialsErrorBody]
] = _RotateSipTrunkCredentialsError()
