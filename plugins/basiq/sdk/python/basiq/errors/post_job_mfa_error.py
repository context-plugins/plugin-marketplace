from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.jobs_mfa400_error1 import JobsMfa400Error1
from ..models.jobs_mfa401_error1 import JobsMfa401Error1
from ..models.jobs_mfa403_error1 import JobsMfa403Error1
from ..models.jobs_mfa404_error1 import JobsMfa404Error1
from ..models.jobs_mfa500_error1 import JobsMfa500Error1

PostJobMfaErrorBody: TypeAlias = (
    JobsMfa400Error1 | JobsMfa401Error1 | JobsMfa403Error1 | JobsMfa404Error1 | JobsMfa500Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _PostJobMfaError:
    def map(self, status_code: int, content: bytes) -> PostJobMfaErrorBody:
        match status_code:
            case 400:
                return decode_json[JobsMfa400Error1](content)
            case 401:
                return decode_json[JobsMfa401Error1](content)
            case 403:
                return decode_json[JobsMfa403Error1](content)
            case 404:
                return decode_json[JobsMfa404Error1](content)
            case 500:
                return decode_json[JobsMfa500Error1](content)
            case _:
                return RawError(status_code, content)


post_job_mfa_error_mapper: Final[ErrorMapper[PostJobMfaErrorBody]] = _PostJobMfaError()
