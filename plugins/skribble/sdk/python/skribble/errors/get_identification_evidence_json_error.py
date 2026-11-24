from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem import Problem

GetIdentificationEvidenceJsonErrorBody: TypeAlias = Problem | RawError


@dataclass(frozen=True, slots=True)
class _GetIdentificationEvidenceJsonError:
    def map(self, status_code: int, content: bytes) -> GetIdentificationEvidenceJsonErrorBody:
        match status_code:
            case 401 | 403 | 404 | 429 | 500 | 503:
                return decode_json[Problem](content)
            case _:
                return RawError(status_code, content)


get_identification_evidence_json_error_mapper: Final[
    ErrorMapper[GetIdentificationEvidenceJsonErrorBody]
] = _GetIdentificationEvidenceJsonError()
