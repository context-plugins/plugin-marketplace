from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_contentstack_personalize_management_attributes_api import (
    ErrorContentstackPersonalizeManagementAttributesApi,
)

CreateExperienceErrorBody: TypeAlias = ErrorContentstackPersonalizeManagementAttributesApi | RawError


@dataclass(frozen=True, slots=True)
class _CreateExperienceError:
    def map(self, status_code: int, content: bytes) -> CreateExperienceErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorContentstackPersonalizeManagementAttributesApi](content)
            case _:
                return RawError(status_code, content)


create_experience_error_mapper: Final[ErrorMapper[CreateExperienceErrorBody]] = _CreateExperienceError()
