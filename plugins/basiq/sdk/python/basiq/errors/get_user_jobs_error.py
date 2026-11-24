from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.users_jobs400_error1 import UsersJobs400Error1
from ..models.users_jobs401_error1 import UsersJobs401Error1
from ..models.users_jobs403_error1 import UsersJobs403Error1
from ..models.users_jobs404_error1 import UsersJobs404Error1
from ..models.users_jobs500_error1 import UsersJobs500Error1

GetUserJobsErrorBody: TypeAlias = (
    UsersJobs400Error1 | UsersJobs401Error1 | UsersJobs403Error1 | UsersJobs404Error1 | UsersJobs500Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _GetUserJobsError:
    def map(self, status_code: int, content: bytes) -> GetUserJobsErrorBody:
        match status_code:
            case 400:
                return decode_json[UsersJobs400Error1](content)
            case 401:
                return decode_json[UsersJobs401Error1](content)
            case 403:
                return decode_json[UsersJobs403Error1](content)
            case 404:
                return decode_json[UsersJobs404Error1](content)
            case 500:
                return decode_json[UsersJobs500Error1](content)
            case _:
                return RawError(status_code, content)


get_user_jobs_error_mapper: Final[ErrorMapper[GetUserJobsErrorBody]] = _GetUserJobsError()
