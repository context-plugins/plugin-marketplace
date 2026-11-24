from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_contentstack_personalize_management_attributes_api import (
    ErrorContentstackPersonalizeManagementAttributesApi,
)

DeleteAudienceErrorBody: TypeAlias = ErrorContentstackPersonalizeManagementAttributesApi | RawError


@dataclass(frozen=True, slots=True)
class _DeleteAudienceError:
    def map(self, status_code: int, content: bytes) -> DeleteAudienceErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorContentstackPersonalizeManagementAttributesApi](content)
            case _:
                return RawError(status_code, content)


delete_audience_error_mapper: Final[ErrorMapper[DeleteAudienceErrorBody]] = _DeleteAudienceError()
