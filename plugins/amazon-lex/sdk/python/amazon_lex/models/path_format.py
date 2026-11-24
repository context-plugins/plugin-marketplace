from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PathFormat(SdkBaseModel):
    object_prefixes: Optional[list[str]] = Field(default=UNSET, alias="objectPrefixes")
    """A list of Amazon S3 prefixes that points to sub-folders in the Amazon S3 bucket. Specify this list if you only
    want Lex to read the files under this set of sub-folders."""


class PathFormatDict(TypedDict):
    object_prefixes: NotRequired[list[str]]
