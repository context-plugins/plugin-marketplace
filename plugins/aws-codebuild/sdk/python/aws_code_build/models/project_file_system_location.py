from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type2 import Type2OrStr


class ProjectFileSystemLocation(SdkBaseModel):
    type_: Optional[Type2OrStr] = Field(default=UNSET, alias="type")
    """The type of the file system. The one supported type is EFS."""

    location: Optional[str] = UNSET
    """A string that specifies the location of the file system created by Amazon EFS. Its format is
    efs-dns-name:/directory-path. You can find the DNS name of file system when you view it in the Amazon EFS console.
    The directory path is a path to a directory in the file system that CodeBuild mounts. For example, if the DNS name
    of a file system is fs-abcd1234.efs.us-west-2.amazonaws.com, and its mount directory is my-efs-mount-directory, then
    the location is fs-abcd1234.efs.us-west-2.amazonaws.com:/my-efs-mount-directory. The directory path in the format
    efs-dns-name:/directory-path is optional. If y"""

    mount_point: Optional[str] = Field(default=UNSET, alias="mountPoint")
    """The location in the container where you mount the file system."""

    identifier: Optional[str] = UNSET
    """The name used to access a file system created by Amazon EFS. CodeBuild creates an environment variable by
    appending the identifier in all capital letters to CODEBUILD_. For example, if you specify my_efs for identifier, a
    new environment variable is create named CODEBUILD_MY_EFS. The identifier is used to mount your file system."""

    mount_options: Optional[str] = Field(default=UNSET, alias="mountOptions")
    """The mount options for a file system created by Amazon EFS. The default mount options used by CodeBuild are
    nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2. For more information, see Recommended NFS Mount
    Options."""


class ProjectFileSystemLocationDict(TypedDict):
    type_: NotRequired[Type2OrStr]
    location: NotRequired[str]
    mount_point: NotRequired[str]
    identifier: NotRequired[str]
    mount_options: NotRequired[str]
