from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetCrawlJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetCrawlJobError:
    def map(self, status_code: int, content: bytes) -> GetCrawlJobErrorBody:
        match status_code:
            case 401 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_crawl_job_error_mapper: Final[ErrorMapper[GetCrawlJobErrorBody]] = _GetCrawlJobError()
