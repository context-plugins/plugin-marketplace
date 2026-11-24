from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Format1(str, Enum):
    """json: the signed envelope. slack: Block Kit for an Incoming Webhook. teams: an Adaptive Card for a Workflows
    webhook. discord: an embed with a link button for a channel webhook. workspace_studio: fires a Google Workspace
    Studio starter; made by the Deliverd add-on, with runAs."""

    JSON = "json"
    SLACK = "slack"
    TEAMS = "teams"
    DISCORD = "discord"
    WORKSPACE_STUDIO = "workspace_studio"

    __str__ = str.__str__


Format1OrStr: TypeAlias = Annotated[Format1 | str, open_enum_validator(Format1)]
