from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .domain import Domain, DomainDict
from .enums.plan import PlanOrStr
from .metadata import Metadata, MetadataDict
from .user import User, UserDict


class Project(SdkBaseModel):
    id: str
    """The unique ID of the project."""

    name: str
    """The name of the project."""

    slug: str
    """The slug of the project."""

    logo: str | None
    """The logo of the project."""

    usage: float
    """The usage of the project."""

    usage_limit: float = Field(alias="usageLimit")
    """The usage limit of the project."""

    links_usage: float = Field(alias="linksUsage")
    """The links usage of the project."""

    links_limit: float = Field(alias="linksLimit")
    """The links limit of the project."""

    domains_limit: float = Field(alias="domainsLimit")
    """The domains limit of the project."""

    tags_limit: float = Field(alias="tagsLimit")
    """The tags limit of the project."""

    users_limit: float = Field(alias="usersLimit")
    """The users limit of the project."""

    plan: PlanOrStr
    """The plan of the project."""

    stripe_id: str | None = Field(alias="stripeId")
    """The Stripe ID of the project."""

    billing_cycle_start: float = Field(alias="billingCycleStart")
    """The date and time when the billing cycle starts for the project."""

    stripe_connect_id: str | None = Field(alias="stripeConnectId")
    """[BETA]: The Stripe Connect ID of the project."""

    created_at: str = Field(alias="createdAt")
    """The date and time when the project was created."""

    users: list[User]
    """The role of the authenticated user in the project."""

    domains: list[Domain]
    """The domains of the project."""

    metadata: Metadata


class ProjectDict(TypedDict):
    id: str
    name: str
    slug: str
    logo: str | None
    usage: float
    usage_limit: float
    links_usage: float
    links_limit: float
    domains_limit: float
    tags_limit: float
    users_limit: float
    plan: PlanOrStr
    stripe_id: str | None
    billing_cycle_start: float
    stripe_connect_id: str | None
    created_at: str
    users: list[UserDict]
    domains: list[DomainDict]
    metadata: MetadataDict
