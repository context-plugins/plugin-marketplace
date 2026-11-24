from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FormatDeliverdDevWebhookEndpointsApi(str, Enum):
    JSON = "json"
    SLACK = "slack"
    TEAMS = "teams"
    DISCORD = "discord"
    WORKSPACE_STUDIO = "workspace_studio"

    __str__ = str.__str__


FormatDeliverdDevWebhookEndpointsApiOrStr: TypeAlias = Annotated[
    FormatDeliverdDevWebhookEndpointsApi | str, open_enum_validator(FormatDeliverdDevWebhookEndpointsApi)
]
