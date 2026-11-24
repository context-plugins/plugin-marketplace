from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_contentstack_personalize_management_attributes_api import (
    ErrorContentstackPersonalizeManagementAttributesApi,
)

UpdateExperiencePriorityErrorBody: TypeAlias = ErrorContentstackPersonalizeManagementAttributesApi | RawError


@dataclass(frozen=True, slots=True)
class _UpdateExperiencePriorityError:
    def map(self, status_code: int, content: bytes) -> UpdateExperiencePriorityErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorContentstackPersonalizeManagementAttributesApi](content)
            case _:
                return RawError(status_code, content)


update_experience_priority_error_mapper: Final[
    ErrorMapper[UpdateExperiencePriorityErrorBody]
] = _UpdateExperiencePriorityError()
