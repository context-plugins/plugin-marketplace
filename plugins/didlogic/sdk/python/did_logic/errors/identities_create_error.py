from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_identities401_error1 import ApiV2Identities401Error1
from ..models.error import Error

IdentitiesCreateErrorBody: TypeAlias = ApiV2Identities401Error1 | Error | RawError


@dataclass(frozen=True, slots=True)
class _IdentitiesCreateError:
    def map(self, status_code: int, content: bytes) -> IdentitiesCreateErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2Identities401Error1](content)
            case 422:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


identities_create_error_mapper: Final[ErrorMapper[IdentitiesCreateErrorBody]] = _IdentitiesCreateError()
