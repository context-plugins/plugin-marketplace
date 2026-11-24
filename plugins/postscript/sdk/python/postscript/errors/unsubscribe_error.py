from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_compliance_unsubscribe403_error1 import ApiV2ComplianceUnsubscribe403Error1

UnsubscribeErrorBody: TypeAlias = ApiV2ComplianceUnsubscribe403Error1 | RawError


@dataclass(frozen=True, slots=True)
class _UnsubscribeError:
    def map(self, status_code: int, content: bytes) -> UnsubscribeErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV2ComplianceUnsubscribe403Error1](content)
            case _:
                return RawError(status_code, content)


unsubscribe_error_mapper: Final[ErrorMapper[UnsubscribeErrorBody]] = _UnsubscribeError()
