from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class QuotaCounterScope(str, Enum):
    """Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. If the Scope is
    set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share
    the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set
    as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note
    that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself."""

    QUOTA_COUNTER_SCOPE_UNSPECIFIED = "QUOTA_COUNTER_SCOPE_UNSPECIFIED"
    PROXY = "PROXY"
    OPERATION = "OPERATION"
    PRODUCT = "PRODUCT"

    __str__ = str.__str__


QuotaCounterScopeOrStr: TypeAlias = Annotated[QuotaCounterScope | str, open_enum_validator(QuotaCounterScope)]
