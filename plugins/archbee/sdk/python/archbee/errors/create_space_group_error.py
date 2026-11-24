from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.space_group_create400_error1 import SpaceGroupCreate400Error1

CreateSpaceGroupErrorBody: TypeAlias = SpaceGroupCreate400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _CreateSpaceGroupError:
    def map(self, status_code: int, content: bytes) -> CreateSpaceGroupErrorBody:
        match status_code:
            case 400:
                return decode_json[SpaceGroupCreate400Error1](content)
            case _:
                return RawError(status_code, content)


create_space_group_error_mapper: Final[ErrorMapper[CreateSpaceGroupErrorBody]] = _CreateSpaceGroupError()
