from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LogoName1(str, Enum):
    """The preset logo shown next to the dataset in the DoiT console. Omit to keep the current logo; send an empty
    string to clear it."""

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


LogoName1OrStr: TypeAlias = Annotated[LogoName1 | str, open_enum_validator(LogoName1)]
