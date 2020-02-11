#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CommunityCdkEventStack } from '../lib/community-cdk-event-stack';

const app = new cdk.App();
new CommunityCdkEventStack(app, 'CommunityCdkEventStack');
