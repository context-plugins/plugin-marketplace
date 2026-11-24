from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_contentstack_personalize_management_attributes_api import (
    ErrorContentstackPersonalizeManagementAttributesApi,
)

DeleteAttributeErrorBody: TypeAlias = ErrorContentstackPersonalizeManagementAttributesApi | RawError


@dataclass(frozen=True, slots=True)
class _DeleteAttributeError:
    def map(self, status_code: int, content: bytes) -> DeleteAttributeErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorContentstackPersonalizeManagementAttributesApi](content)
            case _:
                return RawError(status_code, content)


delete_attribute_error_mapper: Final[ErrorMapper[DeleteAttributeErrorBody]] = _DeleteAttributeError()
