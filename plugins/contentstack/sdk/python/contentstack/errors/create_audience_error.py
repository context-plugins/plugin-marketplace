from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_contentstack_personalize_management_attributes_api import (
    ErrorContentstackPersonalizeManagementAttributesApi,
)

CreateAudienceErrorBody: TypeAlias = ErrorContentstackPersonalizeManagementAttributesApi | RawError


@dataclass(frozen=True, slots=True)
class _CreateAudienceError:
    def map(self, status_code: int, content: bytes) -> CreateAudienceErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorContentstackPersonalizeManagementAttributesApi](content)
            case _:
                return RawError(status_code, content)


create_audience_error_mapper: Final[ErrorMapper[CreateAudienceErrorBody]] = _CreateAudienceError()
