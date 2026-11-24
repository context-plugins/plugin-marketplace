from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.model_not_found_exception1 import ModelNotFoundException1

CampaignsShowErrorBody: TypeAlias = ModelNotFoundException1 | RawError


@dataclass(frozen=True, slots=True)
class _CampaignsShowError:
    def map(self, status_code: int, content: bytes) -> CampaignsShowErrorBody:
        match status_code:
            case 404:
                return decode_json[ModelNotFoundException1](content)
            case _:
                return RawError(status_code, content)


campaigns_show_error_mapper: Final[ErrorMapper[CampaignsShowErrorBody]] = _CampaignsShowError()
