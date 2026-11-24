from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_contentstack_personalize_management_attributes_api import (
    ErrorContentstackPersonalizeManagementAttributesApi,
)

CreateAttributeErrorBody: TypeAlias = ErrorContentstackPersonalizeManagementAttributesApi | RawError


@dataclass(frozen=True, slots=True)
class _CreateAttributeError:
    def map(self, status_code: int, content: bytes) -> CreateAttributeErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorContentstackPersonalizeManagementAttributesApi](content)
            case _:
                return RawError(status_code, content)


create_attribute_error_mapper: Final[ErrorMapper[CreateAttributeErrorBody]] = _CreateAttributeError()
