from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeTagsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeTagsError:
    def map(self, status_code: int, content: bytes) -> DescribeTagsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_tags_error_mapper: Final[ErrorMapper[DescribeTagsErrorBody]] = _DescribeTagsError()
