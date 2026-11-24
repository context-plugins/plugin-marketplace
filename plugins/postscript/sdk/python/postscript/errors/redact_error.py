from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_compliance_redact403_error1 import ApiV2ComplianceRedact403Error1

RedactErrorBody: TypeAlias = ApiV2ComplianceRedact403Error1 | RawError


@dataclass(frozen=True, slots=True)
class _RedactError:
    def map(self, status_code: int, content: bytes) -> RedactErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV2ComplianceRedact403Error1](content)
            case _:
                return RawError(status_code, content)


redact_error_mapper: Final[ErrorMapper[RedactErrorBody]] = _RedactError()
