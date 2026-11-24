from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PipelineConfigurationSource(SdkBaseModel):
    """Information about the source of the pipeline configuration"""

    source: str
    """Identifier of the configuration source"""

    uri: str
    """Link to the configuration source view or its immediate content"""


class PipelineConfigurationSourceDict(TypedDict):
    source: str
    uri: str
