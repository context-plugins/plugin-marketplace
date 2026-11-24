from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .py_pi_repository_config2 import PyPiRepositoryConfig2, PyPiRepositoryConfig2Dict


class RepositoryConfig(SdkBaseModel):
    """Configuration for dependency repositories"""

    pypi_repository_config: Optional[PyPiRepositoryConfig2] = Field(default=UNSET, alias="pypiRepositoryConfig")
    """Optional. Configuration for PyPi repository."""


class RepositoryConfigDict(TypedDict):
    pypi_repository_config: NotRequired[PyPiRepositoryConfig2Dict]
