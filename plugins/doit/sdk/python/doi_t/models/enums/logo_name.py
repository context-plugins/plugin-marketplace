from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LogoName(str, Enum):
    """An optional preset logo shown next to the dataset in the DoiT console."""

    ANTHROPIC = "anthropic"
    ATLASSIAN = "atlassian"
    AWS = "aws"
    AZURE = "azure"
    BIFROST = "bifrost"
    CHATGPT = "chatgpt"
    CLOUDFLARE = "cloudflare"
    COPILOT = "copilot"
    FIGMA = "figma"
    GCP = "gcp"
    GITHUB = "github"
    GITLAB = "gitlab"
    HOTJAR = "hotjar"
    JIRA = "jira"
    LITELLM = "litellm"
    MIRO = "miro"
    NOTION = "notion"
    SLACK = "slack"
    WORDPRESS = "wordpress"

    __str__ = str.__str__


LogoNameOrStr: TypeAlias = Annotated[LogoName | str, open_enum_validator(LogoName)]
