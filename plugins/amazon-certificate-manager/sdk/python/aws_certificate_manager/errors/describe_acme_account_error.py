from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeAcmeAccountErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeAcmeAccountError:
    def map(self, status_code: int, content: bytes) -> DescribeAcmeAccountErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_acme_account_error_mapper: Final[ErrorMapper[DescribeAcmeAccountErrorBody]] = _DescribeAcmeAccountError()
