from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

MergePeopleErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _MergePeopleError:
    def map(self, status_code: int, content: bytes) -> MergePeopleErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


merge_people_error_mapper: Final[ErrorMapper[MergePeopleErrorBody]] = _MergePeopleError()
