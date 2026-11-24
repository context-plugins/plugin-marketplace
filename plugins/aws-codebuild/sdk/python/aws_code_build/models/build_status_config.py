from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BuildStatusConfig(SdkBaseModel):
    context: Optional[str] = UNSET
    """Specifies the context of the build status CodeBuild sends to the source provider. The usage of this parameter
    depends on the source provider. Bitbucket This parameter is used for the name parameter in the Bitbucket commit
    status. For more information, see build in the Bitbucket API documentation. GitHub/GitHub Enterprise Server This
    parameter is used for the context parameter in the GitHub commit status. For more information, see Create a commit
    status in the GitHub developer guide."""

    target_url: Optional[str] = Field(default=UNSET, alias="targetUrl")
    """Specifies the target url of the build status CodeBuild sends to the source provider. The usage of this parameter
    depends on the source provider. Bitbucket This parameter is used for the url parameter in the Bitbucket commit
    status. For more information, see build in the Bitbucket API documentation. GitHub/GitHub Enterprise Server This
    parameter is used for the target_url parameter in the GitHub commit status. For more information, see Create a
    commit status in the GitHub developer guide."""


class BuildStatusConfigDict(TypedDict):
    context: NotRequired[str]
    target_url: NotRequired[str]
