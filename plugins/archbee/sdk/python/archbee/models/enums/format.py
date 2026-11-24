from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Format(str, Enum):
    """OPTIONAL. Specify the format of the content. Default is markdown. Use mdx when the content contains JSX-style
    Archbee components (<hint>, <CtaButton />, <Tabs>); directive-style components (:::hint{type="info"}) work in both
    markdown and mdx."""

    MARKDOWN = "markdown"
    MDX = "mdx"
    JSON = "json"

    __str__ = str.__str__


FormatOrStr: TypeAlias = Annotated[Format | str, open_enum_validator(Format)]
