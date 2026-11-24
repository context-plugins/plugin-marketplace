from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SubmitCrawlJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SubmitCrawlJobError:
    def map(self, status_code: int, content: bytes) -> SubmitCrawlJobErrorBody:
        match status_code:
            case 401 | 429:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


submit_crawl_job_error_mapper: Final[ErrorMapper[SubmitCrawlJobErrorBody]] = _SubmitCrawlJobError()
