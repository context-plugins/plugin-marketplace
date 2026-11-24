from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PutApiV1ReportsByIdOrSlugDataByNameErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PutApiV1ReportsByIdOrSlugDataByNameError:
    def map(self, status_code: int, content: bytes) -> PutApiV1ReportsByIdOrSlugDataByNameErrorBody:
        match status_code:
            case 400 | 409 | 413:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


put_api_v1_reports_by_id_or_slug_data_by_name_error_mapper: Final[
    ErrorMapper[PutApiV1ReportsByIdOrSlugDataByNameErrorBody]
] = _PutApiV1ReportsByIdOrSlugDataByNameError()
