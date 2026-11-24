export { AwsStorageGatewayClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { AmazonStorageGatewayRestApi } from "./resources/amazon-storage-gateway-rest-api.js";
export { AwsStorageGateway } from "./resources/aws-storage-gateway.js";
export { CacheReport } from "./resources/cache-report.js";
export { Operations } from "./resources/operations.js";

export { activateGatewayInputSchema, type ActivateGatewayInput } from "./models/activate-gateway-input.js";
export { activateGatewayOutputSchema, type ActivateGatewayOutput } from "./models/activate-gateway-output.js";
export { ActiveDirectoryStatus, activeDirectoryStatusSchema } from "./models/active-directory-status.js";
export { ActiveDirectoryStatus1, activeDirectoryStatus1Schema } from "./models/active-directory-status1.js";
export {
  ActiveDirectoryStatusAwsStorageGatewayOperationsApi,
  activeDirectoryStatusAwsStorageGatewayOperationsApiSchema,
} from "./models/active-directory-status-aws-storage-gateway-operations-api.js";
export { addCacheInputSchema, type AddCacheInput } from "./models/add-cache-input.js";
export { addCacheOutputSchema, type AddCacheOutput } from "./models/add-cache-output.js";
export {
  addTagsToResourceInputSchema,
  type AddTagsToResourceInput,
} from "./models/add-tags-to-resource-input.js";
export {
  addTagsToResourceOutputSchema,
  type AddTagsToResourceOutput,
} from "./models/add-tags-to-resource-output.js";
export { addUploadBufferInputSchema, type AddUploadBufferInput } from "./models/add-upload-buffer-input.js";
export {
  addUploadBufferOutputSchema,
  type AddUploadBufferOutput,
} from "./models/add-upload-buffer-output.js";
export {
  addWorkingStorageInputSchema,
  type AddWorkingStorageInput,
} from "./models/add-working-storage-input.js";
export {
  addWorkingStorageOutputSchema,
  type AddWorkingStorageOutput,
} from "./models/add-working-storage-output.js";
export { assignTapePoolInputSchema, type AssignTapePoolInput } from "./models/assign-tape-pool-input.js";
export { assignTapePoolOutputSchema, type AssignTapePoolOutput } from "./models/assign-tape-pool-output.js";
export {
  associateFileSystemInputSchema,
  type AssociateFileSystemInput,
} from "./models/associate-file-system-input.js";
export {
  associateFileSystemOutputSchema,
  type AssociateFileSystemOutput,
} from "./models/associate-file-system-output.js";
export { attachVolumeInputSchema, type AttachVolumeInput } from "./models/attach-volume-input.js";
export { attachVolumeOutputSchema, type AttachVolumeOutput } from "./models/attach-volume-output.js";
export {
  automaticTapeCreationPolicyInfoSchema,
  type AutomaticTapeCreationPolicyInfo,
} from "./models/automatic-tape-creation-policy-info.js";
export {
  automaticTapeCreationRuleSchema,
  type AutomaticTapeCreationRule,
} from "./models/automatic-tape-creation-rule.js";
export { AutomaticUpdatePolicy, automaticUpdatePolicySchema } from "./models/automatic-update-policy.js";
export {
  bandwidthRateLimitIntervalSchema,
  type BandwidthRateLimitInterval,
} from "./models/bandwidth-rate-limit-interval.js";
export { cacheAttributesSchema, type CacheAttributes } from "./models/cache-attributes.js";
export { cacheReportFilterSchema, type CacheReportFilter } from "./models/cache-report-filter.js";
export { cacheReportInfoSchema, type CacheReportInfo } from "./models/cache-report-info.js";
export { CacheReportStatus, cacheReportStatusSchema } from "./models/cache-report-status.js";
export { cachediScsiVolumeSchema, type CachediScsiVolume } from "./models/cachedi-scsi-volume.js";
export { cancelArchivalInputSchema, type CancelArchivalInput } from "./models/cancel-archival-input.js";
export { cancelArchivalOutputSchema, type CancelArchivalOutput } from "./models/cancel-archival-output.js";
export {
  cancelCacheReportInputSchema,
  type CancelCacheReportInput,
} from "./models/cancel-cache-report-input.js";
export {
  cancelCacheReportOutputSchema,
  type CancelCacheReportOutput,
} from "./models/cancel-cache-report-output.js";
export { cancelRetrievalInputSchema, type CancelRetrievalInput } from "./models/cancel-retrieval-input.js";
export { cancelRetrievalOutputSchema, type CancelRetrievalOutput } from "./models/cancel-retrieval-output.js";
export { CaseSensitivity, caseSensitivitySchema } from "./models/case-sensitivity.js";
export { chapInfoSchema, type ChapInfo } from "./models/chap-info.js";
export {
  createCachediScsiVolumeInputSchema,
  type CreateCachediScsiVolumeInput,
} from "./models/create-cachedi-scsi-volume-input.js";
export {
  createCachediScsiVolumeOutputSchema,
  type CreateCachediScsiVolumeOutput,
} from "./models/create-cachedi-scsi-volume-output.js";
export {
  createNfsFileShareInputSchema,
  type CreateNfsFileShareInput,
} from "./models/create-nfs-file-share-input.js";
export {
  createNfsFileShareOutputSchema,
  type CreateNfsFileShareOutput,
} from "./models/create-nfs-file-share-output.js";
export {
  createSmbFileShareInputSchema,
  type CreateSmbFileShareInput,
} from "./models/create-smb-file-share-input.js";
export {
  createSmbFileShareOutputSchema,
  type CreateSmbFileShareOutput,
} from "./models/create-smb-file-share-output.js";
export {
  createSnapshotFromVolumeRecoveryPointInputSchema,
  type CreateSnapshotFromVolumeRecoveryPointInput,
} from "./models/create-snapshot-from-volume-recovery-point-input.js";
export {
  createSnapshotFromVolumeRecoveryPointOutputSchema,
  type CreateSnapshotFromVolumeRecoveryPointOutput,
} from "./models/create-snapshot-from-volume-recovery-point-output.js";
export { createSnapshotInputSchema, type CreateSnapshotInput } from "./models/create-snapshot-input.js";
export { createSnapshotOutputSchema, type CreateSnapshotOutput } from "./models/create-snapshot-output.js";
export {
  createStorediScsiVolumeInputSchema,
  type CreateStorediScsiVolumeInput,
} from "./models/create-storedi-scsi-volume-input.js";
export {
  createStorediScsiVolumeOutputSchema,
  type CreateStorediScsiVolumeOutput,
} from "./models/create-storedi-scsi-volume-output.js";
export { createTapePoolInputSchema, type CreateTapePoolInput } from "./models/create-tape-pool-input.js";
export { createTapePoolOutputSchema, type CreateTapePoolOutput } from "./models/create-tape-pool-output.js";
export {
  createTapeWithBarcodeInputSchema,
  type CreateTapeWithBarcodeInput,
} from "./models/create-tape-with-barcode-input.js";
export {
  createTapeWithBarcodeOutputSchema,
  type CreateTapeWithBarcodeOutput,
} from "./models/create-tape-with-barcode-output.js";
export { createTapesInputSchema, type CreateTapesInput } from "./models/create-tapes-input.js";
export { createTapesOutputSchema, type CreateTapesOutput } from "./models/create-tapes-output.js";
export {
  deleteAutomaticTapeCreationPolicyInputSchema,
  type DeleteAutomaticTapeCreationPolicyInput,
} from "./models/delete-automatic-tape-creation-policy-input.js";
export {
  deleteAutomaticTapeCreationPolicyOutputSchema,
  type DeleteAutomaticTapeCreationPolicyOutput,
} from "./models/delete-automatic-tape-creation-policy-output.js";
export {
  deleteBandwidthRateLimitInputSchema,
  type DeleteBandwidthRateLimitInput,
} from "./models/delete-bandwidth-rate-limit-input.js";
export {
  deleteBandwidthRateLimitOutputSchema,
  type DeleteBandwidthRateLimitOutput,
} from "./models/delete-bandwidth-rate-limit-output.js";
export {
  deleteCacheReportInputSchema,
  type DeleteCacheReportInput,
} from "./models/delete-cache-report-input.js";
export {
  deleteCacheReportOutputSchema,
  type DeleteCacheReportOutput,
} from "./models/delete-cache-report-output.js";
export {
  deleteChapCredentialsInputSchema,
  type DeleteChapCredentialsInput,
} from "./models/delete-chap-credentials-input.js";
export {
  deleteChapCredentialsOutputSchema,
  type DeleteChapCredentialsOutput,
} from "./models/delete-chap-credentials-output.js";
export { deleteFileShareInputSchema, type DeleteFileShareInput } from "./models/delete-file-share-input.js";
export {
  deleteFileShareOutputSchema,
  type DeleteFileShareOutput,
} from "./models/delete-file-share-output.js";
export { deleteGatewayInputSchema, type DeleteGatewayInput } from "./models/delete-gateway-input.js";
export { deleteGatewayOutputSchema, type DeleteGatewayOutput } from "./models/delete-gateway-output.js";
export {
  deleteSnapshotScheduleInputSchema,
  type DeleteSnapshotScheduleInput,
} from "./models/delete-snapshot-schedule-input.js";
export {
  deleteSnapshotScheduleOutputSchema,
  type DeleteSnapshotScheduleOutput,
} from "./models/delete-snapshot-schedule-output.js";
export {
  deleteTapeArchiveInputSchema,
  type DeleteTapeArchiveInput,
} from "./models/delete-tape-archive-input.js";
export {
  deleteTapeArchiveOutputSchema,
  type DeleteTapeArchiveOutput,
} from "./models/delete-tape-archive-output.js";
export { deleteTapeInputSchema, type DeleteTapeInput } from "./models/delete-tape-input.js";
export { deleteTapeOutputSchema, type DeleteTapeOutput } from "./models/delete-tape-output.js";
export { deleteTapePoolInputSchema, type DeleteTapePoolInput } from "./models/delete-tape-pool-input.js";
export { deleteTapePoolOutputSchema, type DeleteTapePoolOutput } from "./models/delete-tape-pool-output.js";
export { deleteVolumeInputSchema, type DeleteVolumeInput } from "./models/delete-volume-input.js";
export { deleteVolumeOutputSchema, type DeleteVolumeOutput } from "./models/delete-volume-output.js";
export {
  describeAvailabilityMonitorTestInputSchema,
  type DescribeAvailabilityMonitorTestInput,
} from "./models/describe-availability-monitor-test-input.js";
export {
  describeAvailabilityMonitorTestOutputSchema,
  type DescribeAvailabilityMonitorTestOutput,
} from "./models/describe-availability-monitor-test-output.js";
export {
  describeBandwidthRateLimitInputSchema,
  type DescribeBandwidthRateLimitInput,
} from "./models/describe-bandwidth-rate-limit-input.js";
export {
  describeBandwidthRateLimitOutputSchema,
  type DescribeBandwidthRateLimitOutput,
} from "./models/describe-bandwidth-rate-limit-output.js";
export {
  describeBandwidthRateLimitScheduleInputSchema,
  type DescribeBandwidthRateLimitScheduleInput,
} from "./models/describe-bandwidth-rate-limit-schedule-input.js";
export {
  describeBandwidthRateLimitScheduleOutputSchema,
  type DescribeBandwidthRateLimitScheduleOutput,
} from "./models/describe-bandwidth-rate-limit-schedule-output.js";
export { describeCacheInputSchema, type DescribeCacheInput } from "./models/describe-cache-input.js";
export { describeCacheOutputSchema, type DescribeCacheOutput } from "./models/describe-cache-output.js";
export {
  describeCacheReportInputSchema,
  type DescribeCacheReportInput,
} from "./models/describe-cache-report-input.js";
export {
  describeCacheReportOutputSchema,
  type DescribeCacheReportOutput,
} from "./models/describe-cache-report-output.js";
export {
  describeCachediScsiVolumesInputSchema,
  type DescribeCachediScsiVolumesInput,
} from "./models/describe-cachedi-scsi-volumes-input.js";
export {
  describeCachediScsiVolumesOutputSchema,
  type DescribeCachediScsiVolumesOutput,
} from "./models/describe-cachedi-scsi-volumes-output.js";
export {
  describeChapCredentialsInputSchema,
  type DescribeChapCredentialsInput,
} from "./models/describe-chap-credentials-input.js";
export {
  describeChapCredentialsOutputSchema,
  type DescribeChapCredentialsOutput,
} from "./models/describe-chap-credentials-output.js";
export {
  describeFileSystemAssociationsInputSchema,
  type DescribeFileSystemAssociationsInput,
} from "./models/describe-file-system-associations-input.js";
export {
  describeFileSystemAssociationsOutputSchema,
  type DescribeFileSystemAssociationsOutput,
} from "./models/describe-file-system-associations-output.js";
export {
  describeGatewayInformationInputSchema,
  type DescribeGatewayInformationInput,
} from "./models/describe-gateway-information-input.js";
export {
  describeGatewayInformationOutputSchema,
  type DescribeGatewayInformationOutput,
} from "./models/describe-gateway-information-output.js";
export {
  describeMaintenanceStartTimeInputSchema,
  type DescribeMaintenanceStartTimeInput,
} from "./models/describe-maintenance-start-time-input.js";
export {
  describeMaintenanceStartTimeOutputSchema,
  type DescribeMaintenanceStartTimeOutput,
} from "./models/describe-maintenance-start-time-output.js";
export {
  describeNfsFileSharesInputSchema,
  type DescribeNfsFileSharesInput,
} from "./models/describe-nfs-file-shares-input.js";
export {
  describeNfsFileSharesOutputSchema,
  type DescribeNfsFileSharesOutput,
} from "./models/describe-nfs-file-shares-output.js";
export {
  describeSmbFileSharesInputSchema,
  type DescribeSmbFileSharesInput,
} from "./models/describe-smb-file-shares-input.js";
export {
  describeSmbFileSharesOutputSchema,
  type DescribeSmbFileSharesOutput,
} from "./models/describe-smb-file-shares-output.js";
export {
  describeSmbSettingsInputSchema,
  type DescribeSmbSettingsInput,
} from "./models/describe-smb-settings-input.js";
export {
  describeSmbSettingsOutputSchema,
  type DescribeSmbSettingsOutput,
} from "./models/describe-smb-settings-output.js";
export {
  describeSnapshotScheduleInputSchema,
  type DescribeSnapshotScheduleInput,
} from "./models/describe-snapshot-schedule-input.js";
export {
  describeSnapshotScheduleOutputSchema,
  type DescribeSnapshotScheduleOutput,
} from "./models/describe-snapshot-schedule-output.js";
export {
  describeStorediScsiVolumesInputSchema,
  type DescribeStorediScsiVolumesInput,
} from "./models/describe-storedi-scsi-volumes-input.js";
export {
  describeStorediScsiVolumesOutputSchema,
  type DescribeStorediScsiVolumesOutput,
} from "./models/describe-storedi-scsi-volumes-output.js";
export {
  describeTapeArchivesInputSchema,
  type DescribeTapeArchivesInput,
} from "./models/describe-tape-archives-input.js";
export {
  describeTapeArchivesOutputSchema,
  type DescribeTapeArchivesOutput,
} from "./models/describe-tape-archives-output.js";
export {
  describeTapeRecoveryPointsInputSchema,
  type DescribeTapeRecoveryPointsInput,
} from "./models/describe-tape-recovery-points-input.js";
export {
  describeTapeRecoveryPointsOutputSchema,
  type DescribeTapeRecoveryPointsOutput,
} from "./models/describe-tape-recovery-points-output.js";
export { describeTapesInputSchema, type DescribeTapesInput } from "./models/describe-tapes-input.js";
export { describeTapesOutputSchema, type DescribeTapesOutput } from "./models/describe-tapes-output.js";
export {
  describeUploadBufferInputSchema,
  type DescribeUploadBufferInput,
} from "./models/describe-upload-buffer-input.js";
export {
  describeUploadBufferOutputSchema,
  type DescribeUploadBufferOutput,
} from "./models/describe-upload-buffer-output.js";
export {
  describeVtlDevicesInputSchema,
  type DescribeVtlDevicesInput,
} from "./models/describe-vtl-devices-input.js";
export {
  describeVtlDevicesOutputSchema,
  type DescribeVtlDevicesOutput,
} from "./models/describe-vtl-devices-output.js";
export {
  describeWorkingStorageInputSchema,
  type DescribeWorkingStorageInput,
} from "./models/describe-working-storage-input.js";
export {
  describeWorkingStorageOutputSchema,
  type DescribeWorkingStorageOutput,
} from "./models/describe-working-storage-output.js";
export { detachVolumeInputSchema, type DetachVolumeInput } from "./models/detach-volume-input.js";
export { detachVolumeOutputSchema, type DetachVolumeOutput } from "./models/detach-volume-output.js";
export { deviceiScsiAttributesSchema, type DeviceiScsiAttributes } from "./models/devicei-scsi-attributes.js";
export { disableGatewayInputSchema, type DisableGatewayInput } from "./models/disable-gateway-input.js";
export { disableGatewayOutputSchema, type DisableGatewayOutput } from "./models/disable-gateway-output.js";
export {
  disassociateFileSystemInputSchema,
  type DisassociateFileSystemInput,
} from "./models/disassociate-file-system-input.js";
export {
  disassociateFileSystemOutputSchema,
  type DisassociateFileSystemOutput,
} from "./models/disassociate-file-system-output.js";
export { diskSchema, type Disk } from "./models/disk.js";
export { EncryptionType, encryptionTypeSchema } from "./models/encryption-type.js";
export {
  endpointNetworkConfigurationSchema,
  type EndpointNetworkConfiguration,
} from "./models/endpoint-network-configuration.js";
export { ErrorCode, errorCodeSchema } from "./models/error-code.js";
export {
  evictFilesFailingUploadInputSchema,
  type EvictFilesFailingUploadInput,
} from "./models/evict-files-failing-upload-input.js";
export {
  evictFilesFailingUploadOutputSchema,
  type EvictFilesFailingUploadOutput,
} from "./models/evict-files-failing-upload-output.js";
export { fileShareInfoSchema, type FileShareInfo } from "./models/file-share-info.js";
export { FileShareType, fileShareTypeSchema } from "./models/file-share-type.js";
export {
  fileSystemAssociationInfoSchema,
  type FileSystemAssociationInfo,
} from "./models/file-system-association-info.js";
export {
  fileSystemAssociationStatusDetailSchema,
  type FileSystemAssociationStatusDetail,
} from "./models/file-system-association-status-detail.js";
export {
  fileSystemAssociationSummarySchema,
  type FileSystemAssociationSummary,
} from "./models/file-system-association-summary.js";
export { GatewayCapacity, gatewayCapacitySchema } from "./models/gateway-capacity.js";
export { GatewayCapacity1, gatewayCapacity1Schema } from "./models/gateway-capacity1.js";
export { gatewayInfoSchema, type GatewayInfo } from "./models/gateway-info.js";
export { HostEnvironment, hostEnvironmentSchema } from "./models/host-environment.js";
export { internalServerErrorSchema, type InternalServerError } from "./models/internal-server-error.js";
export {
  internalServerErrorErrorSchema,
  type InternalServerErrorError,
} from "./models/internal-server-error-error.js";
export {
  invalidGatewayRequestExceptionSchema,
  type InvalidGatewayRequestException,
} from "./models/invalid-gateway-request-exception.js";
export {
  invalidGatewayRequestExceptionErrorSchema,
  type InvalidGatewayRequestExceptionError,
} from "./models/invalid-gateway-request-exception-error.js";
export { joinDomainInputSchema, type JoinDomainInput } from "./models/join-domain-input.js";
export { joinDomainOutputSchema, type JoinDomainOutput } from "./models/join-domain-output.js";
export {
  joinDomainOutputAwsStorageGatewayOperationsApiSchema,
  type JoinDomainOutputAwsStorageGatewayOperationsApi,
} from "./models/join-domain-output-aws-storage-gateway-operations-api.js";
export {
  listAutomaticTapeCreationPoliciesInputSchema,
  type ListAutomaticTapeCreationPoliciesInput,
} from "./models/list-automatic-tape-creation-policies-input.js";
export {
  listAutomaticTapeCreationPoliciesOutputSchema,
  type ListAutomaticTapeCreationPoliciesOutput,
} from "./models/list-automatic-tape-creation-policies-output.js";
export {
  listCacheReportsInputSchema,
  type ListCacheReportsInput,
} from "./models/list-cache-reports-input.js";
export {
  listCacheReportsOutputSchema,
  type ListCacheReportsOutput,
} from "./models/list-cache-reports-output.js";
export { listFileSharesInputSchema, type ListFileSharesInput } from "./models/list-file-shares-input.js";
export { listFileSharesOutputSchema, type ListFileSharesOutput } from "./models/list-file-shares-output.js";
export {
  listFileSystemAssociationsInputSchema,
  type ListFileSystemAssociationsInput,
} from "./models/list-file-system-associations-input.js";
export {
  listFileSystemAssociationsOutputSchema,
  type ListFileSystemAssociationsOutput,
} from "./models/list-file-system-associations-output.js";
export { listGatewaysInputSchema, type ListGatewaysInput } from "./models/list-gateways-input.js";
export { listGatewaysOutputSchema, type ListGatewaysOutput } from "./models/list-gateways-output.js";
export { listLocalDisksInputSchema, type ListLocalDisksInput } from "./models/list-local-disks-input.js";
export { listLocalDisksOutputSchema, type ListLocalDisksOutput } from "./models/list-local-disks-output.js";
export {
  listTagsForResourceInputSchema,
  type ListTagsForResourceInput,
} from "./models/list-tags-for-resource-input.js";
export {
  listTagsForResourceOutputSchema,
  type ListTagsForResourceOutput,
} from "./models/list-tags-for-resource-output.js";
export { listTapePoolsInputSchema, type ListTapePoolsInput } from "./models/list-tape-pools-input.js";
export { listTapePoolsOutputSchema, type ListTapePoolsOutput } from "./models/list-tape-pools-output.js";
export { listTapesInputSchema, type ListTapesInput } from "./models/list-tapes-input.js";
export { listTapesOutputSchema, type ListTapesOutput } from "./models/list-tapes-output.js";
export {
  listVolumeInitiatorsInputSchema,
  type ListVolumeInitiatorsInput,
} from "./models/list-volume-initiators-input.js";
export {
  listVolumeInitiatorsOutputSchema,
  type ListVolumeInitiatorsOutput,
} from "./models/list-volume-initiators-output.js";
export {
  listVolumeRecoveryPointsInputSchema,
  type ListVolumeRecoveryPointsInput,
} from "./models/list-volume-recovery-points-input.js";
export {
  listVolumeRecoveryPointsOutputSchema,
  type ListVolumeRecoveryPointsOutput,
} from "./models/list-volume-recovery-points-output.js";
export { listVolumesInputSchema, type ListVolumesInput } from "./models/list-volumes-input.js";
export { listVolumesOutputSchema, type ListVolumesOutput } from "./models/list-volumes-output.js";
export { nfsFileShareDefaultsSchema, type NfsFileShareDefaults } from "./models/nfs-file-share-defaults.js";
export { nfsFileShareInfoSchema, type NfsFileShareInfo } from "./models/nfs-file-share-info.js";
export { Name, nameSchema } from "./models/name.js";
export { networkInterfaceSchema, type NetworkInterface } from "./models/network-interface.js";
export {
  notifyWhenUploadedInputSchema,
  type NotifyWhenUploadedInput,
} from "./models/notify-when-uploaded-input.js";
export {
  notifyWhenUploadedOutputSchema,
  type NotifyWhenUploadedOutput,
} from "./models/notify-when-uploaded-output.js";
export { ObjectAcl, objectAclSchema } from "./models/object-acl.js";
export { ObjectAcl2, objectAcl2Schema } from "./models/object-acl2.js";
export { poolInfoSchema, type PoolInfo } from "./models/pool-info.js";
export { PoolStatus, poolStatusSchema } from "./models/pool-status.js";
export { refreshCacheInputSchema, type RefreshCacheInput } from "./models/refresh-cache-input.js";
export { refreshCacheOutputSchema, type RefreshCacheOutput } from "./models/refresh-cache-output.js";
export {
  removeTagsFromResourceInputSchema,
  type RemoveTagsFromResourceInput,
} from "./models/remove-tags-from-resource-input.js";
export {
  removeTagsFromResourceOutputSchema,
  type RemoveTagsFromResourceOutput,
} from "./models/remove-tags-from-resource-output.js";
export { resetCacheInputSchema, type ResetCacheInput } from "./models/reset-cache-input.js";
export { resetCacheOutputSchema, type ResetCacheOutput } from "./models/reset-cache-output.js";
export { RetentionLockType, retentionLockTypeSchema } from "./models/retention-lock-type.js";
export { RetentionLockType1, retentionLockType1Schema } from "./models/retention-lock-type1.js";
export {
  retrieveTapeArchiveInputSchema,
  type RetrieveTapeArchiveInput,
} from "./models/retrieve-tape-archive-input.js";
export {
  retrieveTapeArchiveOutputSchema,
  type RetrieveTapeArchiveOutput,
} from "./models/retrieve-tape-archive-output.js";
export {
  retrieveTapeRecoveryPointInputSchema,
  type RetrieveTapeRecoveryPointInput,
} from "./models/retrieve-tape-recovery-point-input.js";
export {
  retrieveTapeRecoveryPointOutputSchema,
  type RetrieveTapeRecoveryPointOutput,
} from "./models/retrieve-tape-recovery-point-output.js";
export { smbFileShareInfoSchema, type SmbFileShareInfo } from "./models/smb-file-share-info.js";
export { smbLocalGroupsSchema, type SmbLocalGroups } from "./models/smb-local-groups.js";
export { SmbSecurityStrategy, smbSecurityStrategySchema } from "./models/smb-security-strategy.js";
export { SmbSecurityStrategy1, smbSecurityStrategy1Schema } from "./models/smb-security-strategy1.js";
export {
  serviceUnavailableErrorSchema,
  type ServiceUnavailableError,
} from "./models/service-unavailable-error.js";
export {
  serviceUnavailableErrorErrorSchema,
  type ServiceUnavailableErrorError,
} from "./models/service-unavailable-error-error.js";
export {
  setLocalConsolePasswordInputSchema,
  type SetLocalConsolePasswordInput,
} from "./models/set-local-console-password-input.js";
export {
  setLocalConsolePasswordOutputSchema,
  type SetLocalConsolePasswordOutput,
} from "./models/set-local-console-password-output.js";
export {
  setSmbGuestPasswordInputSchema,
  type SetSmbGuestPasswordInput,
} from "./models/set-smb-guest-password-input.js";
export {
  setSmbGuestPasswordOutputSchema,
  type SetSmbGuestPasswordOutput,
} from "./models/set-smb-guest-password-output.js";
export { shutdownGatewayInputSchema, type ShutdownGatewayInput } from "./models/shutdown-gateway-input.js";
export { shutdownGatewayOutputSchema, type ShutdownGatewayOutput } from "./models/shutdown-gateway-output.js";
export {
  softwareUpdatePreferencesSchema,
  type SoftwareUpdatePreferences,
} from "./models/software-update-preferences.js";
export {
  startAvailabilityMonitorTestInputSchema,
  type StartAvailabilityMonitorTestInput,
} from "./models/start-availability-monitor-test-input.js";
export {
  startAvailabilityMonitorTestOutputSchema,
  type StartAvailabilityMonitorTestOutput,
} from "./models/start-availability-monitor-test-output.js";
export {
  startCacheReportInputSchema,
  type StartCacheReportInput,
} from "./models/start-cache-report-input.js";
export {
  startCacheReportOutputSchema,
  type StartCacheReportOutput,
} from "./models/start-cache-report-output.js";
export { startGatewayInputSchema, type StartGatewayInput } from "./models/start-gateway-input.js";
export { startGatewayOutputSchema, type StartGatewayOutput } from "./models/start-gateway-output.js";
export { Status, statusSchema } from "./models/status.js";
export { StorageClass, storageClassSchema } from "./models/storage-class.js";
export { StorageClass1, storageClass1Schema } from "./models/storage-class1.js";
export { storageGatewayErrorSchema, type StorageGatewayError } from "./models/storage-gateway-error.js";
export { storediScsiVolumeSchema, type StorediScsiVolume } from "./models/storedi-scsi-volume.js";
export {
  SupportedGatewayCapacity,
  supportedGatewayCapacitySchema,
} from "./models/supported-gateway-capacity.js";
export { tagSchema, type Tag } from "./models/tag.js";
export { tapeSchema, type Tape } from "./models/tape.js";
export { tapeArchiveSchema, type TapeArchive } from "./models/tape-archive.js";
export { tapeInfoSchema, type TapeInfo } from "./models/tape-info.js";
export {
  tapeRecoveryPointInfoSchema,
  type TapeRecoveryPointInfo,
} from "./models/tape-recovery-point-info.js";
export {
  updateAutomaticTapeCreationPolicyInputSchema,
  type UpdateAutomaticTapeCreationPolicyInput,
} from "./models/update-automatic-tape-creation-policy-input.js";
export {
  updateAutomaticTapeCreationPolicyOutputSchema,
  type UpdateAutomaticTapeCreationPolicyOutput,
} from "./models/update-automatic-tape-creation-policy-output.js";
export {
  updateBandwidthRateLimitInputSchema,
  type UpdateBandwidthRateLimitInput,
} from "./models/update-bandwidth-rate-limit-input.js";
export {
  updateBandwidthRateLimitOutputSchema,
  type UpdateBandwidthRateLimitOutput,
} from "./models/update-bandwidth-rate-limit-output.js";
export {
  updateBandwidthRateLimitScheduleInputSchema,
  type UpdateBandwidthRateLimitScheduleInput,
} from "./models/update-bandwidth-rate-limit-schedule-input.js";
export {
  updateBandwidthRateLimitScheduleOutputSchema,
  type UpdateBandwidthRateLimitScheduleOutput,
} from "./models/update-bandwidth-rate-limit-schedule-output.js";
export {
  updateChapCredentialsInputSchema,
  type UpdateChapCredentialsInput,
} from "./models/update-chap-credentials-input.js";
export {
  updateChapCredentialsOutputSchema,
  type UpdateChapCredentialsOutput,
} from "./models/update-chap-credentials-output.js";
export {
  updateFileSystemAssociationInputSchema,
  type UpdateFileSystemAssociationInput,
} from "./models/update-file-system-association-input.js";
export {
  updateFileSystemAssociationOutputSchema,
  type UpdateFileSystemAssociationOutput,
} from "./models/update-file-system-association-output.js";
export {
  updateGatewayInformationInputSchema,
  type UpdateGatewayInformationInput,
} from "./models/update-gateway-information-input.js";
export {
  updateGatewayInformationOutputSchema,
  type UpdateGatewayInformationOutput,
} from "./models/update-gateway-information-output.js";
export {
  updateGatewaySoftwareNowInputSchema,
  type UpdateGatewaySoftwareNowInput,
} from "./models/update-gateway-software-now-input.js";
export {
  updateGatewaySoftwareNowOutputSchema,
  type UpdateGatewaySoftwareNowOutput,
} from "./models/update-gateway-software-now-output.js";
export {
  updateMaintenanceStartTimeInputSchema,
  type UpdateMaintenanceStartTimeInput,
} from "./models/update-maintenance-start-time-input.js";
export {
  updateMaintenanceStartTimeOutputSchema,
  type UpdateMaintenanceStartTimeOutput,
} from "./models/update-maintenance-start-time-output.js";
export {
  updateNfsFileShareInputSchema,
  type UpdateNfsFileShareInput,
} from "./models/update-nfs-file-share-input.js";
export {
  updateNfsFileShareOutputSchema,
  type UpdateNfsFileShareOutput,
} from "./models/update-nfs-file-share-output.js";
export {
  updateSmbFileShareInputSchema,
  type UpdateSmbFileShareInput,
} from "./models/update-smb-file-share-input.js";
export {
  updateSmbFileShareOutputSchema,
  type UpdateSmbFileShareOutput,
} from "./models/update-smb-file-share-output.js";
export {
  updateSmbFileShareVisibilityInputSchema,
  type UpdateSmbFileShareVisibilityInput,
} from "./models/update-smb-file-share-visibility-input.js";
export {
  updateSmbFileShareVisibilityOutputSchema,
  type UpdateSmbFileShareVisibilityOutput,
} from "./models/update-smb-file-share-visibility-output.js";
export {
  updateSmbLocalGroupsInputSchema,
  type UpdateSmbLocalGroupsInput,
} from "./models/update-smb-local-groups-input.js";
export {
  updateSmbLocalGroupsOutputSchema,
  type UpdateSmbLocalGroupsOutput,
} from "./models/update-smb-local-groups-output.js";
export {
  updateSmbSecurityStrategyInputSchema,
  type UpdateSmbSecurityStrategyInput,
} from "./models/update-smb-security-strategy-input.js";
export {
  updateSmbSecurityStrategyOutputSchema,
  type UpdateSmbSecurityStrategyOutput,
} from "./models/update-smb-security-strategy-output.js";
export {
  updateSnapshotScheduleInputSchema,
  type UpdateSnapshotScheduleInput,
} from "./models/update-snapshot-schedule-input.js";
export {
  updateSnapshotScheduleOutputSchema,
  type UpdateSnapshotScheduleOutput,
} from "./models/update-snapshot-schedule-output.js";
export {
  updateVtlDeviceTypeInputSchema,
  type UpdateVtlDeviceTypeInput,
} from "./models/update-vtl-device-type-input.js";
export {
  updateVtlDeviceTypeOutputSchema,
  type UpdateVtlDeviceTypeOutput,
} from "./models/update-vtl-device-type-output.js";
export { vtlDeviceSchema, type VtlDevice } from "./models/vtl-device.js";
export { volumeInfoSchema, type VolumeInfo } from "./models/volume-info.js";
export {
  volumeRecoveryPointInfoSchema,
  type VolumeRecoveryPointInfo,
} from "./models/volume-recovery-point-info.js";
export { volumeiScsiAttributesSchema, type VolumeiScsiAttributes } from "./models/volumei-scsi-attributes.js";
export { XAmzTarget, xAmzTargetSchema } from "./models/xamz-target.js";
export { XAmzTarget1, xAmzTarget1Schema } from "./models/xamz-target1.js";
export { XAmzTarget10, xAmzTarget10Schema } from "./models/xamz-target10.js";
export { XAmzTarget11, xAmzTarget11Schema } from "./models/xamz-target11.js";
export { XAmzTarget12, xAmzTarget12Schema } from "./models/xamz-target12.js";
export { XAmzTarget13, xAmzTarget13Schema } from "./models/xamz-target13.js";
export { XAmzTarget14, xAmzTarget14Schema } from "./models/xamz-target14.js";
export { XAmzTarget15, xAmzTarget15Schema } from "./models/xamz-target15.js";
export { XAmzTarget16, xAmzTarget16Schema } from "./models/xamz-target16.js";
export { XAmzTarget17, xAmzTarget17Schema } from "./models/xamz-target17.js";
export { XAmzTarget18, xAmzTarget18Schema } from "./models/xamz-target18.js";
export { XAmzTarget19, xAmzTarget19Schema } from "./models/xamz-target19.js";
export {
  XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi,
  xAmzTarget1AwsStorageGatewayAwsStorageGatewayApiSchema,
} from "./models/xamz-target1-aws-storage-gateway-aws-storage-gateway-api.js";
export {
  XAmzTarget1AwsStorageGatewayCacheReportApi,
  xAmzTarget1AwsStorageGatewayCacheReportApiSchema,
} from "./models/xamz-target1-aws-storage-gateway-cache-report-api.js";
export { XAmzTarget2, xAmzTarget2Schema } from "./models/xamz-target2.js";
export { XAmzTarget20, xAmzTarget20Schema } from "./models/xamz-target20.js";
export { XAmzTarget21, xAmzTarget21Schema } from "./models/xamz-target21.js";
export { XAmzTarget22, xAmzTarget22Schema } from "./models/xamz-target22.js";
export { XAmzTarget23, xAmzTarget23Schema } from "./models/xamz-target23.js";
export { XAmzTarget24, xAmzTarget24Schema } from "./models/xamz-target24.js";
export { XAmzTarget25, xAmzTarget25Schema } from "./models/xamz-target25.js";
export { XAmzTarget26, xAmzTarget26Schema } from "./models/xamz-target26.js";
export { XAmzTarget27, xAmzTarget27Schema } from "./models/xamz-target27.js";
export { XAmzTarget28, xAmzTarget28Schema } from "./models/xamz-target28.js";
export { XAmzTarget29, xAmzTarget29Schema } from "./models/xamz-target29.js";
export {
  XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi,
  xAmzTarget2AwsStorageGatewayAwsStorageGatewayApiSchema,
} from "./models/xamz-target2-aws-storage-gateway-aws-storage-gateway-api.js";
export {
  XAmzTarget2AwsStorageGatewayCacheReportApi,
  xAmzTarget2AwsStorageGatewayCacheReportApiSchema,
} from "./models/xamz-target2-aws-storage-gateway-cache-report-api.js";
export {
  XAmzTarget2AwsStorageGatewayOperationsApi,
  xAmzTarget2AwsStorageGatewayOperationsApiSchema,
} from "./models/xamz-target2-aws-storage-gateway-operations-api.js";
export { XAmzTarget3, xAmzTarget3Schema } from "./models/xamz-target3.js";
export { XAmzTarget30, xAmzTarget30Schema } from "./models/xamz-target30.js";
export { XAmzTarget31, xAmzTarget31Schema } from "./models/xamz-target31.js";
export { XAmzTarget32, xAmzTarget32Schema } from "./models/xamz-target32.js";
export { XAmzTarget33, xAmzTarget33Schema } from "./models/xamz-target33.js";
export { XAmzTarget34, xAmzTarget34Schema } from "./models/xamz-target34.js";
export { XAmzTarget35, xAmzTarget35Schema } from "./models/xamz-target35.js";
export { XAmzTarget36, xAmzTarget36Schema } from "./models/xamz-target36.js";
export { XAmzTarget37, xAmzTarget37Schema } from "./models/xamz-target37.js";
export { XAmzTarget38, xAmzTarget38Schema } from "./models/xamz-target38.js";
export { XAmzTarget39, xAmzTarget39Schema } from "./models/xamz-target39.js";
export {
  XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi,
  xAmzTarget3AwsStorageGatewayAwsStorageGatewayApiSchema,
} from "./models/xamz-target3-aws-storage-gateway-aws-storage-gateway-api.js";
export {
  XAmzTarget3AwsStorageGatewayCacheReportApi,
  xAmzTarget3AwsStorageGatewayCacheReportApiSchema,
} from "./models/xamz-target3-aws-storage-gateway-cache-report-api.js";
export {
  XAmzTarget3AwsStorageGatewayOperationsApi,
  xAmzTarget3AwsStorageGatewayOperationsApiSchema,
} from "./models/xamz-target3-aws-storage-gateway-operations-api.js";
export { XAmzTarget4, xAmzTarget4Schema } from "./models/xamz-target4.js";
export { XAmzTarget40, xAmzTarget40Schema } from "./models/xamz-target40.js";
export { XAmzTarget41, xAmzTarget41Schema } from "./models/xamz-target41.js";
export { XAmzTarget42, xAmzTarget42Schema } from "./models/xamz-target42.js";
export { XAmzTarget43, xAmzTarget43Schema } from "./models/xamz-target43.js";
export { XAmzTarget44, xAmzTarget44Schema } from "./models/xamz-target44.js";
export { XAmzTarget45, xAmzTarget45Schema } from "./models/xamz-target45.js";
export { XAmzTarget46, xAmzTarget46Schema } from "./models/xamz-target46.js";
export { XAmzTarget47, xAmzTarget47Schema } from "./models/xamz-target47.js";
export { XAmzTarget48, xAmzTarget48Schema } from "./models/xamz-target48.js";
export { XAmzTarget49, xAmzTarget49Schema } from "./models/xamz-target49.js";
export {
  XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi,
  xAmzTarget4AwsStorageGatewayAwsStorageGatewayApiSchema,
} from "./models/xamz-target4-aws-storage-gateway-aws-storage-gateway-api.js";
export {
  XAmzTarget4AwsStorageGatewayCacheReportApi,
  xAmzTarget4AwsStorageGatewayCacheReportApiSchema,
} from "./models/xamz-target4-aws-storage-gateway-cache-report-api.js";
export {
  XAmzTarget4AwsStorageGatewayOperationsApi,
  xAmzTarget4AwsStorageGatewayOperationsApiSchema,
} from "./models/xamz-target4-aws-storage-gateway-operations-api.js";
export { XAmzTarget5, xAmzTarget5Schema } from "./models/xamz-target5.js";
export { XAmzTarget50, xAmzTarget50Schema } from "./models/xamz-target50.js";
export { XAmzTarget51, xAmzTarget51Schema } from "./models/xamz-target51.js";
export { XAmzTarget52, xAmzTarget52Schema } from "./models/xamz-target52.js";
export { XAmzTarget53, xAmzTarget53Schema } from "./models/xamz-target53.js";
export { XAmzTarget54, xAmzTarget54Schema } from "./models/xamz-target54.js";
export { XAmzTarget55, xAmzTarget55Schema } from "./models/xamz-target55.js";
export { XAmzTarget56, xAmzTarget56Schema } from "./models/xamz-target56.js";
export { XAmzTarget57, xAmzTarget57Schema } from "./models/xamz-target57.js";
export { XAmzTarget58, xAmzTarget58Schema } from "./models/xamz-target58.js";
export { XAmzTarget59, xAmzTarget59Schema } from "./models/xamz-target59.js";
export {
  XAmzTarget5AwsStorageGatewayOperationsApi,
  xAmzTarget5AwsStorageGatewayOperationsApiSchema,
} from "./models/xamz-target5-aws-storage-gateway-operations-api.js";
export { XAmzTarget6, xAmzTarget6Schema } from "./models/xamz-target6.js";
export { XAmzTarget60, xAmzTarget60Schema } from "./models/xamz-target60.js";
export { XAmzTarget61, xAmzTarget61Schema } from "./models/xamz-target61.js";
export { XAmzTarget62, xAmzTarget62Schema } from "./models/xamz-target62.js";
export { XAmzTarget63, xAmzTarget63Schema } from "./models/xamz-target63.js";
export { XAmzTarget64, xAmzTarget64Schema } from "./models/xamz-target64.js";
export { XAmzTarget65, xAmzTarget65Schema } from "./models/xamz-target65.js";
export { XAmzTarget66, xAmzTarget66Schema } from "./models/xamz-target66.js";
export { XAmzTarget67, xAmzTarget67Schema } from "./models/xamz-target67.js";
export { XAmzTarget68, xAmzTarget68Schema } from "./models/xamz-target68.js";
export { XAmzTarget69, xAmzTarget69Schema } from "./models/xamz-target69.js";
export {
  XAmzTarget6AwsStorageGatewayOperationsApi,
  xAmzTarget6AwsStorageGatewayOperationsApiSchema,
} from "./models/xamz-target6-aws-storage-gateway-operations-api.js";
export { XAmzTarget7, xAmzTarget7Schema } from "./models/xamz-target7.js";
export { XAmzTarget70, xAmzTarget70Schema } from "./models/xamz-target70.js";
export { XAmzTarget71, xAmzTarget71Schema } from "./models/xamz-target71.js";
export { XAmzTarget72, xAmzTarget72Schema } from "./models/xamz-target72.js";
export { XAmzTarget73, xAmzTarget73Schema } from "./models/xamz-target73.js";
export { XAmzTarget74, xAmzTarget74Schema } from "./models/xamz-target74.js";
export { XAmzTarget75, xAmzTarget75Schema } from "./models/xamz-target75.js";
export { XAmzTarget76, xAmzTarget76Schema } from "./models/xamz-target76.js";
export { XAmzTarget77, xAmzTarget77Schema } from "./models/xamz-target77.js";
export { XAmzTarget78, xAmzTarget78Schema } from "./models/xamz-target78.js";
export { XAmzTarget79, xAmzTarget79Schema } from "./models/xamz-target79.js";
export {
  XAmzTarget7AwsStorageGatewayOperationsApi,
  xAmzTarget7AwsStorageGatewayOperationsApiSchema,
} from "./models/xamz-target7-aws-storage-gateway-operations-api.js";
export { XAmzTarget8, xAmzTarget8Schema } from "./models/xamz-target8.js";
export { XAmzTarget80, xAmzTarget80Schema } from "./models/xamz-target80.js";
export { XAmzTarget81, xAmzTarget81Schema } from "./models/xamz-target81.js";
export { XAmzTarget82, xAmzTarget82Schema } from "./models/xamz-target82.js";
export { XAmzTarget83, xAmzTarget83Schema } from "./models/xamz-target83.js";
export { XAmzTarget84, xAmzTarget84Schema } from "./models/xamz-target84.js";
export { XAmzTarget85, xAmzTarget85Schema } from "./models/xamz-target85.js";
export {
  XAmzTarget8AwsStorageGatewayOperationsApi,
  xAmzTarget8AwsStorageGatewayOperationsApiSchema,
} from "./models/xamz-target8-aws-storage-gateway-operations-api.js";
export { XAmzTarget9, xAmzTarget9Schema } from "./models/xamz-target9.js";
export {
  XAmzTargetAwsStorageGatewayCacheReportApi,
  xAmzTargetAwsStorageGatewayCacheReportApiSchema,
} from "./models/xamz-target-aws-storage-gateway-cache-report-api.js";

export {
  CoreError as AwsStorageGatewayError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  PaginationError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { Pageable, PageableApiResult } from "./core/pagination/pageable.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { HookOptions, BeforeRequestHook, AfterResponseHook, HookContext } from "./core/hooks.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded, ValidationResult, JsonValue } from "./core/validation/schema.js";
