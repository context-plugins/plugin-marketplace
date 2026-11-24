from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.insufficient_credits_error import InsufficientCreditsError
from ..models.validation_error import ValidationError

CreateProfileProfilesPostErrorBody: TypeAlias = InsufficientCreditsError | ValidationError | RawError


@dataclass(frozen=True, slots=True)
class _CreateProfileProfilesPostError:
    def map(self, status_code: int, content: bytes) -> CreateProfileProfilesPostErrorBody:
        match status_code:
            case 402:
                return decode_json[InsufficientCreditsError](content)
            case 422:
                return decode_json[ValidationError](content)
            case _:
                return RawError(status_code, content)


create_profile_profiles_post_error_mapper: Final[
    ErrorMapper[CreateProfileProfilesPostErrorBody]
] = _CreateProfileProfilesPostError()
