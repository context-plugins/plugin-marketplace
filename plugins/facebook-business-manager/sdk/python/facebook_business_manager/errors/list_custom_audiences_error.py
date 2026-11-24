from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListCustomAudiencesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListCustomAudiencesError:
    def map(self, status_code: int, content: bytes) -> ListCustomAudiencesErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_custom_audiences_error_mapper: Final[ErrorMapper[ListCustomAudiencesErrorBody]] = _ListCustomAudiencesError()
