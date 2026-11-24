from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.space_group_delete400_error1 import SpaceGroupDelete400Error1

DeleteSpaceGroupErrorBody: TypeAlias = SpaceGroupDelete400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _DeleteSpaceGroupError:
    def map(self, status_code: int, content: bytes) -> DeleteSpaceGroupErrorBody:
        match status_code:
            case 400:
                return decode_json[SpaceGroupDelete400Error1](content)
            case _:
                return RawError(status_code, content)


delete_space_group_error_mapper: Final[ErrorMapper[DeleteSpaceGroupErrorBody]] = _DeleteSpaceGroupError()
