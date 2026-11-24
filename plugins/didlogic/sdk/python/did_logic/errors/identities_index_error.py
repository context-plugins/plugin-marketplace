from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_identities401_error1 import ApiV2Identities401Error1

IdentitiesIndexErrorBody: TypeAlias = ApiV2Identities401Error1 | RawError


@dataclass(frozen=True, slots=True)
class _IdentitiesIndexError:
    def map(self, status_code: int, content: bytes) -> IdentitiesIndexErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2Identities401Error1](content)
            case _:
                return RawError(status_code, content)


identities_index_error_mapper: Final[ErrorMapper[IdentitiesIndexErrorBody]] = _IdentitiesIndexError()
