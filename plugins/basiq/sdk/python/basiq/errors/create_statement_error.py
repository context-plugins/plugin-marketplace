from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.users_statements400_error1 import UsersStatements400Error1
from ..models.users_statements403_error1 import UsersStatements403Error1
from ..models.users_statements404_error1 import UsersStatements404Error1
from ..models.users_statements500_error1 import UsersStatements500Error1
from ..models.users_statements503_error1 import UsersStatements503Error1

CreateStatementErrorBody: TypeAlias = (
    UsersStatements400Error1
    | UsersStatements403Error1
    | UsersStatements404Error1
    | UsersStatements500Error1
    | UsersStatements503Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _CreateStatementError:
    def map(self, status_code: int, content: bytes) -> CreateStatementErrorBody:
        match status_code:
            case 400:
                return decode_json[UsersStatements400Error1](content)
            case 403:
                return decode_json[UsersStatements403Error1](content)
            case 404:
                return decode_json[UsersStatements404Error1](content)
            case 500:
                return decode_json[UsersStatements500Error1](content)
            case 503:
                return decode_json[UsersStatements503Error1](content)
            case _:
                return RawError(status_code, content)


create_statement_error_mapper: Final[ErrorMapper[CreateStatementErrorBody]] = _CreateStatementError()
