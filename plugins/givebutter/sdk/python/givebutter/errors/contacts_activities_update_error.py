from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.authorization_exception1 import AuthorizationException1
from ..models.model_not_found_exception1 import ModelNotFoundException1
from ..models.validation_exception1 import ValidationException1

ContactsActivitiesUpdateErrorBody: TypeAlias = (
    AuthorizationException1 | ModelNotFoundException1 | ValidationException1 | RawError
)


@dataclass(frozen=True, slots=True)
class _ContactsActivitiesUpdateError:
    def map(self, status_code: int, content: bytes) -> ContactsActivitiesUpdateErrorBody:
        match status_code:
            case 403:
                return decode_json[AuthorizationException1](content)
            case 404:
                return decode_json[ModelNotFoundException1](content)
            case 422:
                return decode_json[ValidationException1](content)
            case _:
                return RawError(status_code, content)


contacts_activities_update_error_mapper: Final[
    ErrorMapper[ContactsActivitiesUpdateErrorBody]
] = _ContactsActivitiesUpdateError()
