from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceDevCycleManagementWebhooksApi(str, Enum):
    """Source where webhook was created from"""

    API = "api"
    DASHBOARD = "dashboard"
    IMPORTER = "importer"
    GITHUB_CODE_USAGES = "github.code_usages"
    GITHUB_PR_INSIGHTS = "github.pr_insights"
    GITLAB_CODE_USAGES = "gitlab.code_usages"
    GITLAB_PR_INSIGHTS = "gitlab.pr_insights"
    BITBUCKET_CODE_USAGES = "bitbucket.code_usages"
    BITBUCKET_PR_INSIGHTS = "bitbucket.pr_insights"
    TERRAFORM = "terraform"
    CLI = "cli"
    SLACK = "slack"
    MCP = "mcp"

    __str__ = str.__str__


SourceDevCycleManagementWebhooksApiOrStr: TypeAlias = Annotated[
    SourceDevCycleManagementWebhooksApi | str, open_enum_validator(SourceDevCycleManagementWebhooksApi)
]
