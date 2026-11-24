from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.jobs400_error1 import Jobs400Error1
from ..models.jobs401_error1 import Jobs401Error1
from ..models.jobs403_error1 import Jobs403Error1
from ..models.jobs404_error1 import Jobs404Error1
from ..models.jobs500_error1 import Jobs500Error1

GetJobsErrorBody: TypeAlias = Jobs400Error1 | Jobs401Error1 | Jobs403Error1 | Jobs404Error1 | Jobs500Error1 | RawError


@dataclass(frozen=True, slots=True)
class _GetJobsError:
    def map(self, status_code: int, content: bytes) -> GetJobsErrorBody:
        match status_code:
            case 400:
                return decode_json[Jobs400Error1](content)
            case 401:
                return decode_json[Jobs401Error1](content)
            case 403:
                return decode_json[Jobs403Error1](content)
            case 404:
                return decode_json[Jobs404Error1](content)
            case 500:
                return decode_json[Jobs500Error1](content)
            case _:
                return RawError(status_code, content)


get_jobs_error_mapper: Final[ErrorMapper[GetJobsErrorBody]] = _GetJobsError()
