from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .project_settings import ProjectSettings, ProjectSettingsDict
from .vercel_edge_config_connection import VercelEdgeConfigConnection, VercelEdgeConfigConnectionDict


class Project(SdkBaseModel):
    id: str = Field(alias="_id")
    """A unique Project ID"""

    organization: str = Field(alias="_organization")
    """ID of the Organization owning the Project"""

    created_by: str = Field(alias="_createdBy")
    """ID of the User who created the project"""

    name: str
    """Project name"""

    key: str
    """A unique key to identify the Project"""

    description: Optional[str] = UNSET
    """A description of the Project"""

    color: Optional[str] = UNSET
    """Project display color, used to highlight different projects on the dashboard. Must use Hex color code."""

    settings: ProjectSettings
    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The date the Project was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The date the Project was last updated"""

    has_jira_integration: bool = Field(alias="hasJiraIntegration")
    """Boolean tracking whether this project has a jira integration set up"""

    has_received_code_usages: bool = Field(alias="hasReceivedCodeUsages")
    """Describe if a project has ever received code usages for any variable"""

    has_user_config_fetch: bool = Field(alias="hasUserConfigFetch")
    """Boolean indicating whether a user config has been fetched for this project"""

    jira_base_url: str = Field(alias="jiraBaseUrl")
    """Jira project base url, if the integration is defined"""

    readonly: bool
    """Controls whether the feature is editable for a given user"""

    vercel_edge_config_connections: Optional[list[VercelEdgeConfigConnection]] = Field(
        default=UNSET, alias="vercelEdgeConfigConnections"
    )
    """Edge Config Connections for the project"""


class ProjectDict(TypedDict):
    id: str
    organization: str
    created_by: str
    name: str
    key: str
    description: NotRequired[str]
    color: NotRequired[str]
    settings: ProjectSettingsDict
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    has_jira_integration: bool
    has_received_code_usages: bool
    has_user_config_fetch: bool
    jira_base_url: str
    readonly: bool
    vercel_edge_config_connections: NotRequired[list[VercelEdgeConfigConnectionDict]]
