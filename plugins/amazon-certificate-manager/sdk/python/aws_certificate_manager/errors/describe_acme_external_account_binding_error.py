from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeAcmeExternalAccountBindingErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeAcmeExternalAccountBindingError:
    def map(self, status_code: int, content: bytes) -> DescribeAcmeExternalAccountBindingErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_acme_external_account_binding_error_mapper: Final[
    ErrorMapper[DescribeAcmeExternalAccountBindingErrorBody]
] = _DescribeAcmeExternalAccountBindingError()
