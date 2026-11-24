from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PipelineConfig(SdkBaseModel):
    source: Optional[str] = UNSET
    """The source configuration"""

    compiled: Optional[str] = UNSET
    """The compiled configuration"""

    setup_config: Optional[str] = Field(default=UNSET, alias="setup-config")
    """The setup configuration"""

    compiled_setup_config: Optional[str] = Field(default=UNSET, alias="compiled-setup-config")
    """The compiled setup configuration"""


class PipelineConfigDict(TypedDict):
    source: NotRequired[str]
    compiled: NotRequired[str]
    setup_config: NotRequired[str]
    compiled_setup_config: NotRequired[str]
