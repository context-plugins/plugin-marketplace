from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KindDeliverdDevFlowsApi(str, Enum):
    APPROVAL = "approval"
    REVIEW = "review"
    COLLECTION = "collection"
    REPORT = "report"

    __str__ = str.__str__


KindDeliverdDevFlowsApiOrStr: TypeAlias = Annotated[
    KindDeliverdDevFlowsApi | str, open_enum_validator(KindDeliverdDevFlowsApi)
]
