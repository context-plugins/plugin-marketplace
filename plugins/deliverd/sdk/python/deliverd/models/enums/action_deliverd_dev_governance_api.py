from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ActionDeliverdDevGovernanceApi(str, Enum):
    READ = "read"
    ANALYSE = "analyse"
    RECOMMEND = "recommend"
    DRAFT = "draft"
    MODIFY = "modify"
    EXECUTE = "execute"
    PUBLISH = "publish"
    DEPLOY = "deploy"
    SEND = "send"
    DELETE = "delete"
    FINANCIAL_ACTION = "financial_action"
    CUSTOMER_DECISION = "customer_decision"

    __str__ = str.__str__


ActionDeliverdDevGovernanceApiOrStr: TypeAlias = Annotated[
    ActionDeliverdDevGovernanceApi | str, open_enum_validator(ActionDeliverdDevGovernanceApi)
]
