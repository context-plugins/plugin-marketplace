from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PyPiRepositoryConfig(SdkBaseModel):
    """Configuration for PyPi repository"""

    pypi_repository: Optional[str] = Field(default=UNSET, alias="pypiRepository")
    """Optional. The PyPi repository address. Note: This field is not available for batch workloads."""


class PyPiRepositoryConfigDict(TypedDict):
    pypi_repository: NotRequired[str]
