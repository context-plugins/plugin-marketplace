from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_contentstack_personalize_management_attributes_api import (
    ErrorContentstackPersonalizeManagementAttributesApi,
)

SetUserAttributesErrorBody: TypeAlias = ErrorContentstackPersonalizeManagementAttributesApi | RawError


@dataclass(frozen=True, slots=True)
class _SetUserAttributesError:
    def map(self, status_code: int, content: bytes) -> SetUserAttributesErrorBody:
        match status_code:
            case 400 | 403:
                return decode_json[ErrorContentstackPersonalizeManagementAttributesApi](content)
            case _:
                return RawError(status_code, content)


set_user_attributes_error_mapper: Final[ErrorMapper[SetUserAttributesErrorBody]] = _SetUserAttributesError()
