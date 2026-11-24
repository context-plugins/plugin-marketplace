from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReasonDoiTCloudFlowApi(str, Enum):
    CONNECTION_CLEARED = "connection_cleared"
    DATASTORE_TABLE_CLEARED = "datastore_table_cleared"
    POLICY_CLEARED = "policy_cleared"
    SLACK_CHANNEL_CLEARED = "slack_channel_cleared"

    __str__ = str.__str__


ReasonDoiTCloudFlowApiOrStr: TypeAlias = Annotated[
    ReasonDoiTCloudFlowApi | str, open_enum_validator(ReasonDoiTCloudFlowApi)
]
