from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.invalid_policy_revision_id_exception import InvalidPolicyRevisionIdException
from ..models.throttled_exception import ThrottledException

PutResourcePolicyErrorBody: TypeAlias = InvalidPolicyRevisionIdException | ThrottledException | RawError


@dataclass(frozen=True, slots=True)
class _PutResourcePolicyError:
    def map(self, status_code: int, content: bytes) -> PutResourcePolicyErrorBody:
        match status_code:
            case 400:
                return decode_json[InvalidPolicyRevisionIdException](content)
            case 429:
                return decode_json[ThrottledException](content)
            case _:
                return RawError(status_code, content)


put_resource_policy_error_mapper: Final[ErrorMapper[PutResourcePolicyErrorBody]] = _PutResourcePolicyError()
