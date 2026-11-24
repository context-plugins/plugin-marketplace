from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KindDoiTCloudFlowApi(str, Enum):
    POLICY = "policy"
    SLACK_CHANNEL = "slackChannel"

    __str__ = str.__str__


KindDoiTCloudFlowApiOrStr: TypeAlias = Annotated[KindDoiTCloudFlowApi | str, open_enum_validator(KindDoiTCloudFlowApi)]
