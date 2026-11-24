from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.validation_exception1 import ValidationException1

CampaignsStoreErrorBody: TypeAlias = ValidationException1 | RawError


@dataclass(frozen=True, slots=True)
class _CampaignsStoreError:
    def map(self, status_code: int, content: bytes) -> CampaignsStoreErrorBody:
        match status_code:
            case 422:
                return decode_json[ValidationException1](content)
            case _:
                return RawError(status_code, content)


campaigns_store_error_mapper: Final[ErrorMapper[CampaignsStoreErrorBody]] = _CampaignsStoreError()
